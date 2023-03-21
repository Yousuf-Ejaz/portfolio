import { useRef, useEffect, useState } from "react";
function SnakeGame(props) {
	const [cellClassName, setCellClassName] = useState(
		Array.from({ length: 600 }).fill("w-2.5 h-2.5")
	);
	const grid = useRef(null);
	const startButton = useRef(null);
	const score = useRef(null);
	const [currScore, setCurrScore] = useState(0);
	const [squares, setSquares] = useState(
		Array.from(Array(600).keys()).map((_, i) => (
			<div className={cellClassName[i]} key={i}></div>
		))
	);

	const [currentSnake, setCurrentSnake] = useState([5, 4, 3, 2, 1, 0]);

	const direction = useRef(1);
	const prevDirection = useRef(1);
	const [width, setWidth] = useState(20);
	const [timerId, setTimerId] = useState(null);
	const appleIndex = useRef(Math.floor(Math.random() * squares.length));
	const [snakeSpeed, setSnakeSpeed] = useState(0.9);
	const intervalTime = useRef(1000);
	const [isBtnHidden, setIsBtnHidden] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [wellDone, setWellDone] = useState(false);

	function createSnake() {
		let newCellClassName = cellClassName;
		currentSnake.forEach((i) => {
			newCellClassName[i] = "w-2.5 h-2.5 bg-[#43D9AD]";
		});
		setCellClassName(newCellClassName);
		setSquares(
			Array.from(Array(600).keys()).map((_, i) => (
				<div className={cellClassName[i]} key={i}></div>
			))
		);
	}

	function generateApples() {
		while (
			cellClassName[appleIndex.current] === "w-2.5 h-2.5 bg-[#43D9AD]"
		) {
			appleIndex.current = Math.floor(Math.random() * squares.length);
		}
		let newCellClassName = cellClassName;
		newCellClassName[appleIndex.current] =
			"w-2.5 h-2.5 bg-[#43D9AD] rounded-full";
		setCellClassName(newCellClassName);
		setSquares(
			Array.from(Array(600).keys()).map((_, i) => (
				<div className={cellClassName[i]} key={i}></div>
			))
		);
	}

	useEffect(() => {
		props.onScore(score.current);
	}, [score.current]);

	useEffect(() => {
		if (direction.current === -prevDirection.current) {
			let newSnake = currentSnake;
			newSnake.reverse();
			setCurrentSnake(newSnake);
		}
	}, [direction.current]);
	const id = useRef(null);

	useEffect(() => {
		createSnake();
		generateApples();

		function control(e) {
			if (e.keyCode === 39) {
				prevDirection.current = direction.current;
				direction.current = 1;
			} else if (e.keyCode === 38) {
				prevDirection.current = direction.current;
				direction.current = -width;
			} else if (e.keyCode === 37) {
				prevDirection.current = direction.current;
				direction.current = -1;
			} else if (e.keyCode === 40) {
				prevDirection.current = direction.current;
				direction.current = width;
			}
		}

		document.addEventListener("keydown", control);
	}, [direction]);

	function move() {
		// console.log(currentSnake[0] % width, direction.current);
		console.log(currentSnake);
		if (score.current === 10) {
			clearInterval(id.current);
			setWellDone(true);
		}
		let tempSnake = currentSnake;
		const tail = tempSnake.pop();
		let newCellClassName = cellClassName;

		if (currentSnake[0] === appleIndex.current) {
			console.log("gotcha");
			console.log(intervalTime.current);
			newCellClassName[tail] = "w-2.5 h-2.5 bg-[#43D9AD]";
			tempSnake.push(tail);
			score.current = score.current + 1;
			setCurrScore((prevScore) => prevScore + 1);
			intervalTime.current = intervalTime.current * snakeSpeed;
			clearInterval(id.current);
			id.current = setInterval(move, intervalTime.current * snakeSpeed);
			generateApples();
		} else if (
			(currentSnake[0] + width >= width * (width + 10) &&
				direction.current === width) || //if snake has hit bottom
			(currentSnake[0] % width === width - 1 &&
				direction.current === 1) || //if snake has hit right wall
			(currentSnake[0] % width === 0 && direction.current === -1) || //if snake has hit left wall
			(currentSnake[0] - width < 0 && direction.current === -width) || //if snake has hit top
			currentSnake.includes(currentSnake[0] + direction.current, 3)
		) {
			console.log(
				"dead",
				currentSnake[0] + direction.current,
				currentSnake
			);
			setGameOver(true);
			return clearInterval(id.current);
		}

		if (currentSnake[0] != appleIndex.current)
			newCellClassName[tail] = "w-2.5 h-2.5";

		tempSnake.unshift(tempSnake[0] + direction.current);

		setCurrentSnake(tempSnake);

		currentSnake.forEach((i) => {
			newCellClassName[i] = "w-2.5 h-2.5 bg-[#43D9AD]";
		});
		setSquares(
			Array.from(Array(600).keys()).map((_, i) => (
				<div className={newCellClassName[i]} key={i}></div>
			))
		);
		setCellClassName(newCellClassName);
	}

	const onClickHandler = () => {
		setIsBtnHidden(true);
		id.current = setInterval(move, intervalTime.current);
	};

	// const restartHandler = () => {
	// 	setCurrentSnake([5, 4, 3, 2, 1, 0]);
	// 	createSnake();
	// 	generateApples();
	// 	id.current = setInterval(move, intervalTime.current);
	// };

	return (
		<div className="flex flex-col justify-between ">
			<div className="mb-3">
				{/* <h2>
					Score{" "}
					<span id="score" ref={score}>
						{currScore}
					</span>
				</h2> */}
				<div
					className="flex flex-wrap h-[300px] w-[200px] relative"
					ref={grid}
				>
					{squares}
					{!isBtnHidden && (
						<button
							className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1 px-4 py-2 bg-[#FEA55F] text-[#01080E] rounded-lg w-max font-medium transition duration-200 ease-in-out  hover:bg-[#E99287]"
							onClick={onClickHandler}
						>
							start-game
						</button>
					)}
					{gameOver && (
						<div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1 px-4 py-2 bg-[#01080E] text-[#43D9AD] uppercase w-full font-semibold text-center text-lg">
							game over!
						</div>
					)}
					{wellDone && (
						<div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1 px-4 py-2 bg-[#01080E] text-[#43D9AD] uppercase w-full font-semibold text-center text-lg">
							well done!
						</div>
					)}
					{/* {(wellDone || gameOver) && (
						<button
							className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-4 py-2 bg-transparent text-white text-center w-max font-medium opacity-75"
							onClick={restartHandler}
						>
							{wellDone ? "play-again" : "start-again"}
						</button>
					)} */}
				</div>
			</div>
			{/* <button className="btn" ref={startButton} onClick={onClickHandler}>
				Start/Restart
			</button> */}
		</div>
	);
}
export default SnakeGame;
