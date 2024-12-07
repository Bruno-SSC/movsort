com 0
    connected and played around with the API to get a grasp of it.
com 1
    implemented the "movie_list" element which holds and presents the list of queried movies in cards
com 2
    started using sass, organized files structure into MVC, implemented a modal animation for selecting the year and working on the filters options.
com 3
    finished the modal behavior, added the changing color for selected filters, started working on updating the movie list on filter change
com 4
    refactoring some code to avoid macaroni code (particularly, working in a more "variable-directed" way of knowing the included filters and updating their states accordingly)
com 5
    I got a better code to handle open modals but I'm still working on it. Currenly, I'm thinking about wether I should close everyone not open and open them based on the new open list or change the data structure for modals and their state.
com 6
    reached a reasonable way to store the modal state.
com 7
    updated view functions to work with the new structure of model states. Started working on the option states for inclusion/exclusion. Reached a "working" code but not sure if acceptable result.
com 8
    working on the updating the frontend accordingly to the options model but it's not turning out in a likeable way for me.
com 9
    I got the frontend updating properly for the options changing but now i'm trying to get an alternative way and it's not going well.
com 10 
    Got everything working on the options toggling but i'm still uneasy with it. It takes to many iterations to retrive the values. However, I can't think about a way to solve it without changing the data structure.
com 11
    Since i'll likely be using the options variable, it means I'll have to do all the iterations mentioned in the previous commit many times. I'm changing it for a simpler structure.
com 12
    Added a "Filter" class with included/excluded props to instantiate each options category and manage it easier. 
com 13
    I think it's kinda of reasonable how the filter options selecting process and frontend update is now. However, I do feel like I'm overengineering it.
com 14
    some minor changes to make it more cleaner. I split the genre stuff into a genre controller of it's own.
com 15
    did some file changes and now the filters for genres are starting to update the movies when changed. However, I'm very uneasy on how it's working.
com 16
    Improved (kinda of) the organization of the movie list updating therefore mentioned and started working into rendering the genres dinamically
com 17
    The movie lists updates accordingly with the genres select to include/exclude and the provided year as well. It seems like a good MVP for now.
com 18
    Changed the year filter to be more like the genre with modal and options but since the API doesn't provide the same features for include/exclude I will need to rebuild the logic.
    However, I feel like the dataflow is messed up and I need to solve other topics before going on with this.
com 19
    I'm doing a huge refactor to make things more organized. I'm learning how to properly use the MVC and stopped importing js files like I did with the css file. 
com 20
    The option states now works and it's very decent. Worked in the GenreModal-view/model/controller to make a good clean workflow. I'm proud on how it turned out.
com 21
    Started using dotenv for the api token, changed the logic for the first movie list query, regenerated my token as well, now I can make the project public.
com 22
    I forgot to change the api token for the dotenv import in the genres fetch before.
    Implemented the first controller interaction between GenresController and MovieListController. Now genres change the movie list.
    However, I'm not sure if it's the right way to do it. Must give some thought. Strangely, it actually makes some sense.
com 23
    It wasn't the right way. I learned about the EventManager approach to keep the controllers decoupled and accidentaly about singleton pattern as well. I took my time to understand how it works.
com 24
    Making the year modal work like the genre one. Next commit I'll be working on making the movie_list update with changes in both.
com 25
    finally working on the semicolon problem (building the query url based on active filters). I was in a hold up about how to work with fetching the movies with the right filters.
com 26
    Built the feature to fetch with both filters (year and genre) and multiple genres as well. Not only it works, as it looks good as well. 
com 27
    now the active genres are shown in the genre_input element with the ellipses effect for overflowing genres and a counter for the total.
com 28
    Did some styling changes.
com 29
    More style changes, added elements for name searching, icons for layout changing and shuffle movie.
com 30 
    Defined a proper interface for the movie_object and started working on the movie search feature. It kinda works but is just a starter attempt.
com 31
    Since I'm stubborn I tried coming up with a non recursive, not built in way of sorting the name search results based on their compatibility.
com 32
    Finished the name search feature with the old plain recursive quicksort.
com 33
    Roughly Implemented the shuffle and layout switching. 
com 34
    finished the layout switching and the movie_card for the list layout. Got rid of shuffling feature. 
com 35
    micro adjustments, bug fixes and type corrections.
com 36
    more of the previous and implemented the pagination.
com 37
    setting up files to deploy live. 
com 38
    Did a little mess with commit --amend

    








    
