import Userlayout from "../home/components/Userlayout";


export default function Layout({children,}:Readonly<{children:React.ReactNode;}>) {
    return (
        <>
        <Userlayout>
        {children}
        </Userlayout>
        </>
    );
}

