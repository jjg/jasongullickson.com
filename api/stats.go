package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Stats struct {
	TotalPosts int
}

func PostFileCount() int {
	// TODO: Handle errors.
	files, _ := ioutil.ReadDir("../posts")

	return len(files)
}

func GetStats(w http.ResponseWriter, r *http.Request) {
	stats := Stats{PostFileCount()}

	res, err := json.Marshal(stats)

	if err != nil {
		fmt.Println(err) // TODO: Set the HTTP status to reflect an error.
	}

	fmt.Fprintf(w, string(res))
}
