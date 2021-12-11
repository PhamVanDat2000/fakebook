import "./topbar.css"
import SearchIcon from '@material-ui/icons/Search';
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLef">
                <span className="logo">Fakebook</span>
            </div>
            <div className="topbarCenter">
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder="search in fakebook" />
            </div>
            </div>
            <div className="topbarRight">

            </div>
        </div>
    )
}
