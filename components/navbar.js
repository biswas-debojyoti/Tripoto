let navbar = () => {
    return `            <!-- Left section with logo and search bar -->
    <div id="navbarLeft">
        <div id="navbar_Logo">
            <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="Logo">
        </div>
        <!-- search bar -->
        <div class="searchBar">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Search for itineraries,destinations,hotels or activities">
                <button type="submit" class="searchButton"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </div>
         <!-- search bar -->
    </div>
    <!-- Left section with logo and search bar -->
    
    <!-- Right section with all the redirection pages -->

    <div id="navbarRight">
       <div id="inspirations">Inspirations
       </div>
            <div>
               <select name="select" id="inspirations_select">
                   <option style="color: black;" value="">Visit Dubai</option>
                   <option style="color: black;" value="">Visit Singapur</option>
                   <option style="color: black;" value="">Baches</option>
                   <option style="color: black;" value="">Mountains</option>
                   <option style="color: black;" value="">Haritage</option>
                   <option style="color: black;" value="">Weekend Guide</option>
                   <option style="color: black;" value="">Upcoming Festivals</option>
               </select>
            </div>
           
       
        <div id="forum">Forum</div>
        <div id="packages">Packages</div>
        <div id="publish_trip">Publish Trip </div>
        <div>
           <select name="select" id="publish">
               <option style="color: black;" value="">Creat New</option>
               <option style="color: black;" value="">Upload Photos/Videos</option>
               <option style="color: black;" value="">Import Blog</option>
           </select>
        </div>
        <div id="signin">Sign in</div>
    </div>        
</div>`
}

export default navbar;