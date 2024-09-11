import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0454e5a1446a67f102265d725f6f9f3a.jpeg?lk3s=a5d48078&nonce=21797&refresh_token=d1a8a93afab172ac289b3294da1cbd9d&x-expires=1726110000&x-signature=Do%2B2iYJPyc%2BY52T3uZI%2BXupbgio%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>iamnhie29</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nhie Huỳnh</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
