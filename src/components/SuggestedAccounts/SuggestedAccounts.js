import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from '../SuggestedAccounts/AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
