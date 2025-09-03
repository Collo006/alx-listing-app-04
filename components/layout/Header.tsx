const Header: React.FC=()=>{
return (
    <header className="flex justify-between mt-2">
        <input type="name" id="search" placeholder="search" className="bg-amber-900 ml-1.5 border rounded-md"/>
        <button className=" border" >sign in</button>
        <button className="border">sign up</button>
        <button>Rooms</button>
        <button>Mansion</button>
        <button>CountrySide</button>
        <p>Logo</p>
    </header>
)

}
export default Header;