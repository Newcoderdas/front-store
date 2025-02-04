import Adminlayout from "./component/Adminlayout";

export default function Layout({children,}:Readonly<{children:React.ReactNode;}>) {
    return (
        <>
        <Adminlayout>
        {children}
        </Adminlayout>
        </>
    );
}

