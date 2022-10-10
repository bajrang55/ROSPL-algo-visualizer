import React from "react";
import Card from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";

import LinkedListImg from "./../images/Algo Pics/LinkedList.png";

import { Link } from "react-router-dom";

const Style = makeStyles({
	MainDiv: {
		// border: "1px solid red",
		background: "#fff",
		height: "100vh",
		width: "100%",
		// marginTop: "5px",
		// zIndex: "-5",
	},

	cards: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});

function Home() {
	const classes = Style();
	const { MainDiv, cards } = classes;
	const numOfCard = [
		[
			{
				title: " Singly Linked List",
				imgSrc: LinkedListImg,
				url: "/singlylinklist",
				desc:
					"SinglyLinked List is a Data Structure. Where every node pointing a Tail and adding or removing an element in a Linked List from the front,the end or from anywhere in the list But in This project we can remove or add from last in list.It's like VECTOR in Mathematices because it's one directional ",
			},
		],

	];

	// const obj = {
	// 	0: {
	// 		title: "Bubble Sort",
	// 		imgSrc: BubbleSortImg,
	// 	},
	// 	1: {
	// 		title: "Quick Sort",
	// 		imgSrc: QuickSortImg,
	// 	},
	// 	2: {
	// 		title: " Singly Linked Lisr",
	// 		imgSrc: LinkedListImg,
	// 	},
	// 	3: {
	// 		title: "Dfs",
	// 		imgSrc: DfsImg,
	// 	},
	// 	4: {
	// 		title: "Dijkstra",
	// 		imgSrc: DijkstraImg,
	// 	},
	// };

	return (
		<div className={MainDiv}>
			{/* <Card
				img="https://picsum.photos/id/54/400/300"
				title="What I learned from my visit to The Upside Down"
				author="Nancy Wheeler"
			/> */}

			{numOfCard.map((e, i) => (
				<div key={`cards-${i}`} className={cards}>
					{e.map((e1, j) => (
						<Link key={`link-${i}-${j}`} to={e1.url}>
							<Card
								key={`card-${i}-${j}`}
								img={e1.imgSrc}
								title={e1.title}
								author="abc"
								description={e1.desc}
							/>
						</Link>
					))}
				</div>
			))}
		</div>
	);
}

export default Home;
