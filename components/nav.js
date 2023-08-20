const nav = () => {
	return `<style>
            #navbar {
                position: sticky;
                top: 0;
                width: 100%;
                margin: 0;
            }

            #nav-ul {
                list-style-type: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: #00b4cc;
                height: 3em;
            }

            #nav-ul a {
                text-decoration: none;
                color: white;
                font-weight: 700;
                font-family: sans-serif;
            }
        </style>
        <ul id="nav-ul">
            <li><a href="../detail-page/tripoto.html ">Home</a></li>
            <li><a href="../Insp-Dubai/dubai.html">Dubai</a></li>
            <li><a href="../Insp-Singapore/sing.html">Singapore</a></li>
            <li><a href="../Insp-Explore/explore.html">Explore</a></li>
            <li><a href="../ForumPage/forum.html">Forum</a></li>
            <li><a href="../create/create.html">Create</a></li>
            <li><a href="../upload/upload.html">Upload</a></li>
            <li><a href="../Blogs/import-blog.html">Blogs</a></li>
        </ul>`;
};

export { nav };
