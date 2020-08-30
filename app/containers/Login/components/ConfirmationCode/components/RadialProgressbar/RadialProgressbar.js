import React, { useState, useEffect, useCallback } from 'react';




// const [canRequestCode, toggleRequestCode] = useState(false);

// const requestCodeTimeout = 2 * 60 * 1000;

// setTimeout(() => {
//     toggleRequestCode(true)
// }, requestCodeTimeout);

// {canRequestCode && (
//     <ResendCodeButton onClick={async (e) => {
//         await resendCode(e, values.phone);
//     }}/>
// )}
// <SubmitButton isSubmitting={isSubmitting}/>
// </div>
// {errors.code && touched.code && (
// <Form.Text className="text-danger">
//     {errors.code}
// </Form.Text>
// )}
// {!canRequestCode && (
// <RadialProgressbar
//     className={'mt-3'}
//     width={30}
//     defaultValue={requestCodeTimeout / 1000}
//     interval={1000}
// >
// <span>
//     ثانیه دیگر میتوانید دوباره درخواست کد دهید
// </span>
// </RadialProgressbar>
// )}


const RadialProgressbar = ({defaultValue, interval, width, children}) => {
    const [value, setValue] = useState(defaultValue);
    const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(value - 1);
            setPercentage(value * 100 / defaultValue);
        }, interval);

        if (value === 0) {
            clearTimeout(timeout);
        }
    }, [value]);

    if (value > 0) {
        return (
            <div>
                <div style={{
                    width,
                    marginLeft: '0.5rem',
                }}>
                    <CircularProgressbar
                        value={percentage}
                        text={value}
                        styles={buildStyles({
                            strokeLinecap: 'round',
                            textSize: '36px',
                            pathTransitionDuration: 0.25,
                            pathColor: `rgba(257, 83, 57, ${percentage / 50})`,
                            textColor: '#fff',
                            trailColor: 'rgba(0,0,0,0.05)',
                        })}
                    />
                </div>
                {children}
            </div>
        );
    } else {
        return false;
    }
};

export default RadialProgressbar;