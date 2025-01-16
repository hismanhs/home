import { useRouter } from 'next/router';
import DashbordLayout from '../Components/DashbordLayout/DashbordLayout';
import EventLoop from '../Components/EventLoop';

const CurrentPage = () => {
    const router = useRouter();
    const { id } = router.query; // Access the dynamic parameter
    const statusClassMap : any = {
        EventLoop: <EventLoop />,
        Closure:
            <div style={{ whiteSpace: "pre-wrap" }}>
                <h1>{id}</h1>
                {`function createCounter() {
        let count = 0; // Private variable 
           return { 
               increment: function () { 
                   count++; 
               return count; 
               }, 
               decrement: function () {
                    count--; 
               return count; 
               }, 
           }; 
       } 
       const counter = createCounter();
       console.log(counter.increment()); // 1 
       console.log(counter.increment()); // 2 
       console.log(counter.decrement()); // 1`}
            </div>
        ,
        EventBubbling: <div style={{ whiteSpace: "pre-wrap" }}>
            <h1>{id}</h1>
            {`event.stopPropagation();
    To Stop Parent Console  
        1. If you click the Child Button: 
            * First, it logs: Child element clicked! 
            * Then it logs: Parent element clicked! (because of bubbling). 
        2. If event.stopPropagation() is used inside the child button's event listener, it prevents the event from propagating to the parent element. 
       ` }</div>,
        VariablesAndScope: <></>,
        default: <h1>Screen ID: {id}</h1>
    };
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

    return <DashbordLayout TopBar={TopBar} SideBar={SideBar} >
        {typeof id === 'string' ? statusClassMap[id] || statusClassMap.default : statusClassMap.default}
    </DashbordLayout>;
};

export default CurrentPage;