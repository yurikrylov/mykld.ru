package main

import (
	"fmt"
	"net/http"
)

// Add a createMovieHandler for the "POST /v1/movies" endpoint. For now we simply
// return a plain-text placeholder response.
func (app *application) getRunningRoutesHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "get filtered routes")
}

func (app *application) getRunningRouteHandler(w http.ResponseWriter, r *http.Request) {
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	fmt.Fprintf(w, "show the details of running route %d\n", id)
}
