import footeico from "/src/assets/footerico.svg"

export const Footer = () => {
    return(
        <div className="w-[700px] h-[60px] bg-[url(./src/assets/footer-bg.svg)] flex justify-between px-[50px]">
            <img src={footeico} alt="" className="mt-[14px] w-[115px] h-[35px]"/>
            <p className="mt-[30px] text-[16px] text-white font-nova-cut">prod.by Tinplate & sowe</p>
        </div>
    );
}
