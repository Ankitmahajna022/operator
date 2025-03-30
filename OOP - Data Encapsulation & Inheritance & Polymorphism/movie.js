//Scenario: You are building a movie rating system where users can rate movies. The system should also track the total number of ratings given.
//Task:
//Create a Movie class with properties: title and ratings (array).
//Add a static property totalRatingsCount.
//Implement a method addRating(rating) that updates both instance ratings and the static count.

class Movie {
        constructor(title, ratings) {
            this.title = title;
            this.ratings = ratings;
            this.totalRatingsCount = 0;
        }
    
        addRating(rating) {
            this.ratings.push(rating);
            this.totalRatingsCount++;
        }
    
        getAverageRating() {
            if (this.ratings.length === 0) {
                return 0;
            }
            const total = this.ratings.reduce((acc, rating) => acc + rating, 0);
            return total / this.ratings.length;
        }
    
        static get totalRatingsCount() {
            return this.totalRatingsCount;
        }   
    
        static set totalRatingsCount(count) {
            this.totalRatingsCount = count;
        }

        print() {
            document.writeln(this.title);
            document.writeln(this.ratings);
            document.writeln(this.totalRatingsCount);
        }
    }

    const movie = new Movie("The Shawshank Redemption", [4, 5, 3]);
    movie.addRating(2);
    movie.print();