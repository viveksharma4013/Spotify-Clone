import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../../storage/DataLayer'
import './Header.css'
function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists,Songs or Podcast" type="text" />

            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="Name" />
                <h4>Vivek Sharma</h4>
            </div>
        </div>
    )
}
export default Header
