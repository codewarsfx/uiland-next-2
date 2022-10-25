import CategoryTabBar from "../CategoryTab";
import ScreensInCategory from "../ScreensInCategory";




const ScreensTab = ({screens}) => {
	return (
		<>
			<CategoryTabBar/>
			<ScreensInCategory screens={ screens} />
		</>
	);
};

export default ScreensTab;
