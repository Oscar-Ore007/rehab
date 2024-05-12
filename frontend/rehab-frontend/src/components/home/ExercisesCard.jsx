import ExerciseSingleCard from "./ExerciseSingleCard";

const ExercisesCard = ({ exercises }) => {
	return (
		<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{exercises.map((item) => (
				<ExerciseSingleCard key={item._id} exercise={item} />
			))}
		</div>
	);
};

export default ExercisesCard;
