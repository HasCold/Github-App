import RepoButton from "./RepoButton";

interface SortReposProps {
	sortType: string;
	onSort: (sortType: string) => void;
}

const SortRepos: React.FC<SortReposProps> = ({sortType, onSort}) => {
	
	const BUTTONS = [
		{type: "recent", text: "Most Recent"},
		{type: "stars", text: "Most Stars"},
		{type: "forks", text: "Most Forks"},
	]
	
	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			{
				BUTTONS.map((button) => (
					<RepoButton
					text={button.text}
					handleClick={() => onSort(button.type)}
					active={sortType === button.type}
					 />
				))
			}
		</div>
	);
};

export default SortRepos;