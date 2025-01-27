export const Left = ({fill}: {fill: string}) => {
    return(
        <svg width="55" height="100" viewBox="0 0 55 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-[1]">
            <path fillRule="evenodd" 
            clipRule="evenodd" 
            d="M10 0C4.47715 0 0 4.47716 0 10V59.8249C0 65.253 7.57194 69 13 69V69C23.4934 69 32 77.5066 32 88V88C32 93.199 35.5223 100 40.7212 100H54C54.5523 100 55 99.5523 55 99V2C55 0.895431 54.1046 0 53 0H10Z" 
            fill={fill}/>
        </svg>
    );
}