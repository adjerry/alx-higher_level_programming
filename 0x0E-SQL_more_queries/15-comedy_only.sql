-- lists all Comedy shows in the database hbtn_0d_tvshows.


SELECT s.title
FROM (tv_genres g JOIN tv_show_genres sg ON g.id = sg.genre_id)
JOIN tv_shows s ON sg.show_id = s.id
WHERE g.name = "comedy"
ORDER BY s.title ASC;
