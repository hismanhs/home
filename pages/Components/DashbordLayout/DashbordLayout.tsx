
import React from "react";
import styles from "./DashbordLayout.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
interface MenuItemsProp {
    text: string,
    path: string

}
interface DashbordLayoutProp {
    children: any;
    SideBar: MenuItemsProp[];
    TopBar: string[];

}

const DashbordLayout: React.FC<DashbordLayoutProp> = ({
    children,
    SideBar,
    TopBar
}) => {
    const router = useRouter();
    const { id } = router.query;
    const handleMobileClick = (id: string) => {
        router.push(`/CurrentPage/${id}`);
    };
    return (
        <div className={styles.dashbordConatainer}>
            <div className={styles.buttonBar}>
                <div className={styles.largeText}>      <Image src="/apple.svg" alt="github" width={38} height={38} />Hisman Salick</div>
                <div className={styles.menucontainer}>{TopBar.map((item) => <div className={styles.menuitem}>{item}</div>)}  </div>
                <Image src="/github.svg"  className={styles.getcode} alt="github" width={46} height={46} />
            </div>
            <div className={styles.bodycontainer}>
                <div className={styles.sidebar}>
                    {SideBar.map((item) => {
                        return (
                            <button className={id === item.path ? styles.active : styles.buttonContainer} role="button" onClick={() => handleMobileClick(item.path)} >
                                <div className={styles.container}>
                                    <Image
                                        className={styles.logo}
                                        src="/next.svg"
                                        alt="Next.js logo"
                                        width={22} height={22}
                                        priority
                                    />
                                    <div className={styles.textStyle} >{item?.text}</div>
                                </div>
                            </button>
                        )
                    })}
                </div>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;
