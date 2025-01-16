import DashbordLayout from '../Components/DashbordLayout/DashbordLayout';
export default function CurrentPage() {
    const TopBar = ['Home', 'Blocks', 'Dashboard', "Pages", "Trending", "Docs"]
    const SideBar = [
        { text: 'Event Loop', path: 'EventLoop' },
        { text: "Variables and Scope", path: 'VariablesAndScope' },
        { text: 'Closure', path: 'Closure' },
        { text: 'Event Bubbling', path: 'EventBubbling' },
        { text: "Dynamic Pagination", path: 'DynamicPagination' },
        { text: "Animation", path: 'Animation' },
        { text: "Type of Store", path: 'storeType' },
        { text: "Redux and Context API", path: 'Redux' }]

    return <DashbordLayout TopBar={TopBar} SideBar={SideBar} >Initial Page</DashbordLayout>
}