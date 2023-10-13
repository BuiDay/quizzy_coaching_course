import React, { useRef, useState } from 'react';

type IProps = {
    setRoute: (route: string) => void
}

type VerifyNumber = {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
}

const Verification: React.FC<IProps> = ({ setRoute }) => {
    const [ivalidError, setInvalidError] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const inputRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
    const verifictionHandler = () => {

    }

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value }
        setVerifyNumber(newVerifyNumber);
        if (value === '' && index > 0) {
            inputRef[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRef[index + 1].current?.focus();
        }
    }
    return (
        <div className=''>

        </div>
    );
};

export default Verification;