package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Stats struct {
	TotalPosts int64
}

func PostFileCount() int64 {
	// TODO: Actually the number of files in the posts directory.
	return 666
}

func GetStats(w http.ResponseWriter, r *http.Request) {
	stats := Stats{PostFileCount()}

	res, err := json.Marshal(stats)

	if err != nil {
		fmt.Println(err) // TODO: Set the HTTP status to reflect an error.
	}

	fmt.Fprintf(w, string(res))
}
