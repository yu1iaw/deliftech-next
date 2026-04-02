import { MoonLoader } from "react-spinners";


export const Spinner = ({ title, className }: { title?: string, className?: React.HTMLAttributes<HTMLDivElement>["className"] }) => {
    return (
        <div style={{ margin: "auto" }}>
            <MoonLoader size={60} color='#6983a4' loading={true} />
        </div>
    )
}