import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const SignIn = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
        console.tron.log(email);
    }

    return (
        <>
            <div className="logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="236"
                    height="148"
                    viewBox="0 0 236 148"
                    fill="none"
                >
                    <path
                        d="M0 48.7318C2.31467 45.935 6.07601 41.8843 10.1267 38.4123C15.8169 33.59 19.7712 32.1434 22.7609 33.4936C25.2685 34.3616 27.0045 37.5443 27.2938 42.8487C27.5832 49.3105 24.7863 56.2545 19.8676 60.4981C19.8676 60.5945 19.8676 60.5945 19.8676 60.691C24.4969 60.3052 30.1872 63.9701 30.6694 74.1932C30.9587 80.0764 29.5121 84.7057 27.1009 88.0813C23.8218 92.5177 18.228 94.2537 10.0302 94.1573C5.59379 94.1573 2.12178 93.8679 0 93.5786C0 78.5332 0 63.5843 0 48.7318ZM5.88312 64.3559C7.71557 63.4879 9.45157 62.6199 11.284 61.7519C17.6494 58.955 21.3143 52.9754 21.0249 46.803C20.7356 39.3767 16.3956 39.0874 10.5125 43.6203C7.81202 45.6456 6.36535 47.0923 5.49734 48.0567C5.69023 53.4576 5.78668 58.8585 5.88312 64.3559ZM6.36535 88.6599C7.61913 88.7564 9.45157 88.7564 11.7662 88.5635C18.4209 88.1777 24.4005 84.7057 23.9183 75.2541C23.5325 66.3812 17.6494 64.6452 10.9947 67.3457C9.35513 68.0208 7.61913 68.5994 5.97957 69.2746C6.17246 75.7363 6.2689 82.1981 6.36535 88.6599Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M47.3543 69.1781C46.0041 77.4723 44.6539 85.5737 43.3036 93.3857C41.0854 93.3857 38.8672 93.3857 36.5525 93.3857C41.0854 69.7568 45.329 42.9452 49.7654 13.9153C52.3694 12.758 55.0699 11.6007 57.7703 10.6362C64.9072 35.9047 71.8512 63.7772 78.6024 93.1928C76.2877 93.1928 73.973 93.1928 71.6584 93.1928C69.5366 84.127 67.3183 75.2541 65.1966 66.6705C59.217 67.4421 53.2374 68.2137 47.3543 69.1781ZM63.557 58.3763C61.5317 50.5643 59.5063 42.9452 57.481 35.5189C56.1308 30.5038 55.1663 25.8745 54.1054 21.5345C54.009 21.5345 54.009 21.5345 53.9125 21.6309C53.3339 26.7425 52.7552 31.854 52.0801 37.0621C50.8263 45.2598 49.4761 53.2647 48.2223 61.0768C53.3339 60.1123 58.4454 59.2443 63.557 58.3763Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M83.6175 4.36732C87.0895 2.43843 92.1046 0.895322 96.9268 0.220209C104.45 -0.744237 109.272 1.47399 112.744 6.58555C115.541 10.6362 116.987 17.098 116.987 24.3314C116.987 36.6763 112.647 44.8741 107.15 48.4425C107.15 48.539 107.15 48.7319 107.15 48.8283C111.201 51.143 113.612 57.7976 114.866 67.5386C116.602 80.5586 117.759 89.6244 118.82 93.1928C116.602 93.1928 114.383 93.1928 112.069 93.1928C111.201 90.5888 110.043 82.4875 108.5 70.9141C106.861 58.087 104.064 53.2648 97.8913 53.1683C95.7695 53.2648 93.6477 53.4576 91.6224 53.5541C91.9117 66.767 92.2011 79.9799 92.4904 93.1928C90.3686 93.1928 88.1504 93.1928 86.0286 93.1928C85.257 63.5843 84.389 33.9758 83.6175 4.36732ZM91.4295 44.6812C93.7442 44.4883 96.0588 44.2954 98.3735 44.1025C105.607 43.6203 110.14 36.4834 110.043 25.778C109.947 13.7225 104.835 8.61089 97.5055 9.28601C94.1299 9.67178 91.8153 10.5398 90.6579 11.3113C90.9473 22.4025 91.2366 33.5901 91.4295 44.6812Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M126.825 1.0882C129.911 0.123757 134.733 -0.358469 139.652 0.316644C146.692 1.28109 151.032 4.27087 154.215 9.47888C156.915 13.5296 158.362 19.1233 158.169 26.0674C157.88 34.5545 154.311 41.4985 148.718 44.4883C148.718 44.5847 148.718 44.6812 148.718 44.7776C153.636 47.4781 159.134 55.1936 158.651 68.2137C158.362 75.8328 156.433 81.4266 153.829 85.7666C150.164 91.3604 144.378 94.0608 136.18 94.1573C131.743 94.1573 128.271 93.5786 126.15 93.0964C126.439 62.3305 126.632 31.6612 126.825 1.0882ZM133.383 39.5696C135.408 39.666 137.53 39.8589 139.555 39.9554C146.692 40.5341 151.032 34.6509 151.322 25.9709C151.611 15.4584 146.982 10.3469 139.941 9.47888C136.758 9.09311 134.926 9.38244 133.769 9.67177C133.672 19.6056 133.479 29.6358 133.383 39.5696ZM132.804 84.127C134.058 84.5128 135.987 84.7057 138.302 84.7057C145.053 84.8021 151.418 80.4621 151.804 67.4421C152.19 55.1936 146.21 49.407 138.88 48.9247C137.048 48.8283 135.119 48.7319 133.286 48.6354C133.094 60.4981 132.901 72.2643 132.804 84.127Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M194.432 58.4728C187.971 56.8332 181.412 55.483 174.854 54.3256C174.372 64.3559 173.986 74.2897 173.504 84.3199C180.737 84.6092 188.067 84.995 195.3 85.4772C195.204 88.0813 195.011 90.7817 194.915 93.3857C185.463 93.3857 176.108 93.2893 166.656 93.2893C167.814 64.8381 168.971 36.2905 170.032 7.83932C179.483 10.9256 188.646 14.7833 197.519 19.6056C197.422 22.306 197.229 24.91 197.133 27.6105C190.382 24.3314 183.438 21.5345 176.397 19.2198C176.011 27.9962 175.626 36.7727 175.24 45.5492C181.895 46.9958 188.453 48.7318 194.818 50.6607C194.722 53.1683 194.529 55.8687 194.432 58.4728Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M206.681 25.778C209.864 26.7425 214.3 29.25 218.351 32.3363C224.62 37.1585 228.477 42.0772 231.081 47.1888C233.203 51.2394 234.457 55.3865 234.457 59.0514C234.457 65.1274 230.599 67.3457 225.584 67.4421C225.584 67.5386 225.584 67.635 225.584 67.7315C229.152 70.6248 231.274 74.9648 232.335 80.2693C233.782 87.4062 235.036 91.8426 236 93.6751C233.782 93.6751 231.564 93.6751 229.345 93.6751C228.574 92.2284 227.513 87.7919 226.356 80.8479C225.102 73.2288 222.691 69.371 217.097 67.3457C215.168 66.767 213.143 66.1883 211.214 65.6097C210.732 74.9648 210.346 84.2235 209.863 93.5786C207.742 93.5786 205.523 93.5786 203.402 93.5786C204.463 70.9141 205.523 48.3461 206.681 25.778ZM211.407 59.1479C213.528 59.9194 215.65 60.691 217.772 61.4625C224.427 63.8737 228.574 61.7519 228.67 55.9652C228.767 49.407 224.812 43.1381 218.544 38.6052C215.65 36.6763 213.528 35.7118 212.564 35.519C212.178 43.4274 211.792 51.3359 211.407 59.1479Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M126.342 111.421C125.378 111.421 124.606 111.71 124.124 112.385C123.642 113.06 123.353 113.832 123.353 114.893V117.497C123.353 118.558 123.642 119.329 124.124 120.004C124.606 120.68 125.378 120.969 126.439 120.969C127.403 120.969 128.175 120.68 128.657 120.004C129.139 119.329 129.429 118.558 129.429 117.497V114.893C129.429 113.832 129.139 113.06 128.657 112.385C128.175 111.71 127.307 111.421 126.342 111.421Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M150.068 111.614H147.753V115.857H150.068C150.839 115.857 151.418 115.664 151.9 115.279C152.383 114.893 152.479 114.411 152.479 113.736C152.479 113.06 152.286 112.578 151.9 112.192C151.515 111.807 150.936 111.614 150.068 111.614Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M54.3948 132.253V131.578V129.36V109.588H26.8116L40.121 123.38L26.8116 137.172H78.5059V132.253H54.3948Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M199.93 109.588H172.347V129.36V131.578V132.253H148.235V137.172H199.93L186.524 123.38L199.93 109.588Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M124.124 134.568H104.45C102.328 134.568 100.592 136.111 100.592 138.04V145.755C100.592 146.43 101.17 147.009 101.942 147.009C102.714 147.009 103.292 146.43 103.292 145.755V139.968C103.292 139.39 103.774 138.908 104.45 138.908C105.028 138.908 105.607 139.39 105.607 139.968V145.755C105.607 146.43 106.186 147.009 106.957 147.009C107.729 147.009 108.307 146.43 108.307 145.755V139.968C108.307 139.39 108.79 138.908 109.465 138.908C110.14 138.908 110.622 139.39 110.622 139.968V145.755C110.622 146.43 111.201 147.009 111.972 147.009C112.744 147.009 113.322 146.43 113.322 145.755V139.968C113.322 139.39 113.805 138.908 114.48 138.908C115.058 138.908 115.637 139.39 115.637 139.968V145.755C115.637 146.43 116.216 147.009 116.987 147.009C117.759 147.009 118.338 146.43 118.338 145.755V139.968C118.338 139.39 118.82 138.908 119.495 138.908C120.074 138.908 120.652 139.39 120.652 139.968V145.755C120.652 146.43 121.231 147.009 122.002 147.009C122.774 147.009 123.353 146.43 123.353 145.755V139.968C123.353 139.39 123.835 138.908 124.51 138.908C125.089 138.908 125.667 139.39 125.667 139.968V145.755C125.667 146.43 126.246 147.009 127.018 147.009C127.789 147.009 128.368 146.43 128.368 145.755V138.04C127.982 136.111 126.246 134.568 124.124 134.568Z"
                        fill="#E06F00"
                    />
                    <path
                        d="M57.6739 101.776V129.36H169.067V101.776H57.6739ZM83.0388 122.512C81.9779 123.187 80.5313 123.573 78.6988 123.573C76.9628 123.573 75.4197 123.187 74.1659 122.416C72.9121 121.644 72.3335 120.487 72.3335 118.847V118.751H75.9019C75.9019 119.619 76.0948 120.197 76.577 120.487C77.0593 120.872 77.7344 120.969 78.6024 120.969C79.3739 120.969 79.9526 120.872 80.3384 120.583C80.7242 120.294 80.917 119.908 80.917 119.522C80.917 119.04 80.7242 118.654 80.3384 118.365C79.9526 118.076 79.2775 117.786 78.313 117.497C76.3841 116.918 74.9375 116.34 73.973 115.664C73.0086 114.989 72.5264 114.121 72.5264 112.868C72.5264 111.71 73.105 110.746 74.1659 109.974C75.2268 109.203 76.6735 108.913 78.4095 108.913C80.2419 108.913 81.6886 109.299 82.7495 110.071C83.8104 110.842 84.389 111.903 84.2926 113.253V113.35H80.7242C80.7242 112.675 80.5313 112.192 80.1455 111.903C79.7597 111.614 79.181 111.421 78.313 111.421C77.6379 111.421 77.1557 111.614 76.7699 111.903C76.3841 112.192 76.1913 112.578 76.1913 112.964C76.1913 113.35 76.3841 113.736 76.7699 113.928C77.1557 114.121 77.9273 114.507 78.9881 114.893C80.8206 115.375 82.1708 115.954 83.1353 116.725C84.0997 117.4 84.5819 118.365 84.5819 119.619C84.6784 120.776 84.0997 121.74 83.0388 122.512ZM108.597 123.38H104.932V117.69H99.1451V123.38H95.4802V109.106H99.1451V115.086H104.932V109.106H108.597V123.38ZM132.997 117.497C132.997 119.233 132.418 120.68 131.165 121.837C129.911 122.994 128.368 123.573 126.342 123.573C124.317 123.573 122.774 122.994 121.52 121.837C120.266 120.68 119.688 119.233 119.688 117.497V114.893C119.688 113.157 120.266 111.71 121.52 110.553C122.774 109.396 124.414 108.817 126.342 108.817C128.271 108.817 129.911 109.396 131.165 110.553C132.418 111.71 132.997 113.157 132.997 114.893V117.497ZM154.504 117.208C153.443 118.076 151.9 118.461 150.068 118.461H147.753V123.38H144.088V109.106H150.068C151.9 109.106 153.443 109.492 154.504 110.36C155.565 111.228 156.144 112.385 156.144 113.736C156.144 115.086 155.662 116.34 154.504 117.208Z"
                        fill="#E06F00"
                    />
                </svg>
            </div>
            <Form onSubmit={handleSubmit} schema={schema}>
                <div className="form__row">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your email here"
                    />
                </div>
                <div className="form__row">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Your password here"
                    />
                </div>
                <button type="submit">
                    {loading ? 'Carregando...' : 'Loading'}
                </button>
                <Link to="/register">Register</Link>
            </Form>
        </>
    );
};

export default SignIn;
