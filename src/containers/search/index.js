import React from 'react'
import "./style.scss"
import Grid from '@material-ui/core/Grid';
import Genres from './genres';
import * as  GRERES from "./contants"
function Search() {
    return (
        <div className="search">
            <h2 className="search__title">Your top genres</h2>
           <Grid container spacing={3}>
                    {
                        GRERES.listGenresTop.map((item) =>(
                            <Grid item xs={12} lg={4} md={4}>
                            <Genres 
                                genresHeight="genres"
                                genresMain="genres__main" 
                                genresTitle="genres__title"
                                bg={item.bg}
                                img={item.img}
                            />
                            </Grid>
                        ))
                    }
           </Grid>
           <h2 className="search__title">Browse all</h2>
           <Grid container spacing={3}>
                    {
                    GRERES.listGenresAll.map((item)=>(
                        <Grid item xs={4} lg={2} md={2}>
                            <Genres 
                                genresHeight="genres genres-all" 
                                genresMain="genres__main genres__main-all" 
                                genresTitle="genres__title genres__title-all"
                                bg={item.bg}
                                img={item.img}
                            />
                        </Grid>
                    ))
                }
           </Grid>
        </div>
    )
}

export default Search
