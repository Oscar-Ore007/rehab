import React, { useEffect, useState } from "react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const ShowExercise = () => {
	const [exercise, setExercise] = useState({});
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`http://localhost:5555/exercises/${id}`)
			.then((response) => {
				setExercise(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);
	return (
		<div className='p-4'>
			<Backbutton />
			<h1 className='text-3xl my-4'>Show Exercise</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Id</span>
						<span>{exercise._id}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Name</span>
						<span>{exercise.name}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Type</span>
						<span>{exercise.type}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Muscle</span>
						<span>{exercise.muscle}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Equipment</span>
						<span>{exercise.equipment}</span>{" "}
					</div>{" "}
					<div></div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Instructions</span>
						<span>{exercise.instructions}</span>{" "}
					</div>{" "}
					<div></div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Create Time</span>
						<span>{new Date(exercise.createdAt).toString()}</span>
					</div>
					<div className='my-4'>
						<span className='text-xl mr-4 text-gray-500'>Update Time</span>
						<span>{new Date(exercise.updatedAt).toString()}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShowExercise;
