import {cn} from "@/shared/utils";
import {navLink} from "@/shared/components/shared/navigation";

interface Props {
    className?: string;
}

export function Navbar({ className } : Props) {
    return (
        <>
            <ul className={cn(className, "header__pages__navbar")}>
                {navLink.map((link) => (
                    <a href={link.link} key={link.id}><li className="header__pages__navbar__item">{link.name}</li></a>
                ))}
            </ul>
        </>
    )
}