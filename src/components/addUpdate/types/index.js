import CategoryModal from './category';
import ExerciseModal from './exercise';

export default function AllTypes(props) {
    return (
        {
            'category': <CategoryModal props={ props } />,
            'exercise': <ExerciseModal props={ props } />
        }
    )
}