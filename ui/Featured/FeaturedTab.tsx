import ComponentsBox from "./ComponentsBox"

const generateCompSVG = () => {
    return (
        <svg className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" stroke="white"><path d="m3.553 18.895 4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132-2.913 1.457-2.264-1.132L8 12.118zm4-2.5 3-1.5v2.264l-3 1.5V9.618zm6.264 3.632-2.882 1.441-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132-2.882 1.441-2.264-1.132L12 5.118z" /></svg>
    )
}

const generateProjectSVG = () => {
    return (
        <svg className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" width="24" stroke="white" fill="white"><g data-name="1" id="_1"><path d="M399,450H115a59.06,59.06,0,0,1-59-59V246a59.06,59.06,0,0,1,59-59h99.86a29,29,0,0,0,29-29h0a59.06,59.06,0,0,1,59-59H399a59.06,59.06,0,0,1,59,59V391A59.07,59.07,0,0,1,399,450ZM115,217a29,29,0,0,0-29,29V391a29,29,0,0,0,29,29H399a29,29,0,0,0,29-29V158a29,29,0,0,0-29-29H302.86a29,29,0,0,0-29,29,59.07,59.07,0,0,1-59,59Z" /><path d="M121,217a15,15,0,0,1-15-15V63a15,15,0,0,1,15-15H393a15,15,0,0,1,15,15v51a15,15,0,0,1-30,0V78H136V202A15,15,0,0,1,121,217Z" /></g></svg>
    )
}

function FeaturedTab() {
    return (
        <div className="py-2">
            <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h2 className="uppercase tracking-wide font-bold ">Featured</h2>
            </div>
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ComponentsBox image='/images/faux-code.svg' title="Projects" description="Here is a comprehensive list of all my projects, past and present." svg={generateProjectSVG()} href='/projects' />
                <ComponentsBox image='/images/toggles.png' title="Components" description="Usefull snippets and components for building apps and websites." svg={generateCompSVG()} href='/components' />
                <div className="bg-gray-100 h-72 rounded-lg">
                    el3
                </div>
                <div className="bg-gray-100 h-72 rounded-lg">
                    el4
                </div>
            </div>
        </div>
    )
}

export default FeaturedTab