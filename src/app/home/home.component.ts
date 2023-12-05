import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  ngOnInit() {
    this.movies = [
      {
        'Title': 'Tenet',
        'Description': 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
        'Rating': 7.8,
        'img': 'https://pics.filmaffinity.com/Tenet-432994986-large.jpg',
        'Duration': '2h 30 min',
        'Genre': 'Action, Sci-Fi',
        'ReleasedDate': '3 September 2020',
        'TrailerLink': 'https://www.youtube.com/embed/LdOM0x0XDMo?si=CjRc9Quyjfg6drlg'
      },
      {
        'Title': 'Spider-Man: Into the Spider-Verse',
        'Description': 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.',
        'Rating': 8.4,
        'img': 'https://puertafalsadotcom.files.wordpress.com/2019/08/into-the-spider-verse.jpg',
        'Duration': '1h 57min',
        'Genre': 'Action, Animation, Adventure',
        'ReleasedDate': '14 December 2018',
        'TrailerLink': 'https://www.youtube.com/embed/tg52up16eq0?si=VHehwqSkcLjqONtx'
      },
      {
        'Title': 'Knives Out',
        'Description': 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        'Rating': 7.9,
        'img': 'https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/78433238_1180043092184862_7325794063154675712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeGJyEQ2gpw-QZ9oOlr6e-233rLbv7fTp-Destu_t9On4HZ76l0i4iXCHelh6Ze1UqwY1aTqyKWCKpeR6XfNEh2I&_nc_ohc=ET0SsqcijEsAX_KKAzL&_nc_ht=scontent.feze11-1.fna&oh=00_AfACMTjmF1kCbtQPsajO2TWWsJD0nZjf0jhz_-RLLtS4YQ&oe=6592D4B5',
        'Duration': '2h 10min',
        'Genre': 'Comedy, Crime, Drama',
        'ReleasedDate': '27 November 2019',
        'TrailerLink': 'https://www.youtube.com/embed/qGqiHJTsRkQ?si=dpF8ZMrpZ6bW8keE'
      },
      {
        'Title': 'Guardians of the Galaxy',
        'Description': 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        'Rating': 8.0,
        'img': 'https://imgmedia.larepublica.pe/640x960/larepublica/migration/images/YQ2QNJNGXBGXBDQ7VQFHG4BD5I.webp',
        'Duration': '2h 1min',
        'Genre': 'Action, Adventure, Comedy',
        'ReleasedDate': '1 August 2014',
        'TrailerLink':'https://www.youtube.com/embed/d96cjJhvlMA?si=aOcMG9sd4GmRcqc1'
      },
      {
        'Title': 'Avengers: Age of Ultron',
        'Description': 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it´s up to Earth´s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
        'Rating': 7.3,
        'img': 'https://pbs.twimg.com/media/CD25OU1UgAEqUPb?format=jpg&name=900x900',
        'Duration': '2h 21min',
        'Genre': 'Action, Adventure, Sci-Fi',
        'ReleasedDate': '1 May 2015',
        'TrailerLink': 'https://www.youtube.com/embed/tmeOjFno6Do?si=Bolyry_tHP9I82e4',
      }
    ];
    
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  sortByTtle() {
    const orderMovies = this.movies.sort((a,b) => a.Title.localeCompare(b.Title));
    this.movies = orderMovies;
  }
  
  sortByRating() {
    const orderMovies = this.movies.slice().sort((a, b) => b.Rating - a.Rating );
    this.movies = orderMovies;
  }
  
  sortByReleasedDate() {
    const orderMovies = this.movies.slice().sort((a, b) => this.converToDate(b.ReleasedDate) - this.converToDate(a.ReleasedDate));
    this.movies = orderMovies;
  }

  converToDate(relDate: string) :any {
    let date: Date = new Date(parseInt(relDate.substr(-4), 10), this.getMonth(relDate), parseInt(relDate.substr(0, 2), 10));
    return date;
  }

  getMonth(month: string) :any{
    if(month.includes('January')) return 0;
    if(month.includes('February')) return 1;
    if(month.includes('March')) return 2;
    if(month.includes('April')) return 3;
    if(month.includes('May')) return 4;
    if(month.includes('June')) return 5;
    if(month.includes('July')) return 6;
    if(month.includes('August')) return 7;
    if(month.includes('September')) return 8;
    if(month.includes('October')) return 9;
    if(month.includes('November')) return 10;
    if(month.includes('December')) return 11;
  }
}