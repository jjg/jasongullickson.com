package handler

import (
	"fmt"
	"testing"
)

func TestGetStats(t *testing.T) {

	val := PostFileCount()

	fmt.Printf("%d\n", val)

	if val != 0 {
		t.Log("Yay")
	} else {
		t.Log("Boo")
		t.Fatal("PostFileCount() should return something")
	}
}
