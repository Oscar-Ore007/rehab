import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ExercisesTable = ({ exercises }) => {
	return (
		<table className='w-full border-separate border-spacing-2'>
			<thead>
				<tr>
					<th className='border border-slate-600 rounded-md'>No</th>
					<th className='border border-slate-600 rounded-md'>Name</th>
					<th className='border border-slate-600 rounded-md max-md:hidden'>
						Type
					</th>
					<th className='border border-slate-600 rounded-md max-md:hidden'>
						
					</th>
					<th className='border border-slate-600 rounded-md'>Operations</th>
				</tr>
			</thead>
			<tbody>
				{exercises.map((exercise, index) => (
					<tr key={exercise._id} className='h-8'>
						<td className='border border-slate-700 rounded-md text-center'>
							{index + 1}
						</td>
						<td className='border border-slate-700 rounded-md text-center'>
							{exercise.name}
						</td>
						<td className='border border-slate-700 rounded-md text-center max-md:hidden'>
							{exercise.type}
						</td>
						<td className='border border-slate-700 rounded-md text-center max-md:hidden'>
							{exercise.muscle}
						</td>
						<td className='border border-slate-700 rounded-md text-center max-md:hidden'>
							{exercise.equipment}
						</td>
						<td className='border border-slate-700 rounded-md text-center max-md:hidden'>
							{exercise.publishYear}
						</td>
						<td className='border border-slate-700 rounded-md text-center'>
							<div className='flex justify-center gap-x-4'>
								<Link to={`/books/details/${exercise._id}`}>
									<BsInfoCircle className='text-2xl text-green-800' />
								</Link>
								<Link to={`/books/edit/${exercise._id}`}>
									<AiOutlineEdit className='text-2xl text-yellow-600' />
								</Link>
								<Link to={`/books/delete/${exercise._id}`}>
									<MdOutlineDelete className='text-2xl text-red-600' />
								</Link>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default BooksTable;
