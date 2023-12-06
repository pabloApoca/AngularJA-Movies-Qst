import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  filterMovies: Movie[] = [];

  ngOnInit() {
    this.movies = [
      {
        'Title': 'Tenet',
        'Description': 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
        'Rating': 7.8,
        'img': './assets/Tenet.png',
        'Duration': '2h 30 min',
        'Genre': 'Action, Sci-Fi',
        'ReleasedDate': '3 September 2020',
        'TrailerLink': 'https://www.youtube.com/embed/LdOM0x0XDMo?si=CjRc9Quyjfg6drlg'
      },
      {
        'Title': 'Spider-Man: Into the Spider-Verse',
        'Description': 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.',
        'Rating': 8.4,
        'img': './assets/Spider Man.png',
        'Duration': '1h 57min',
        'Genre': 'Action, Animation, Adventure',
        'ReleasedDate': '14 December 2018',
        'TrailerLink': 'https://www.youtube.com/embed/tg52up16eq0?si=VHehwqSkcLjqONtx'
      },
      {
        'Title': 'Knives Out',
        'Description': 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        'Rating': 7.9,
        'img': './assets/Knives Out.png',
        'Duration': '2h 10min',
        'Genre': 'Comedy, Crime, Drama',
        'ReleasedDate': '27 November 2019',
        'TrailerLink': 'https://www.youtube.com/embed/qGqiHJTsRkQ?si=dpF8ZMrpZ6bW8keE'
      },
      {
        'Title': 'Guardians of the Galaxy',
        'Description': 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        'Rating': 8.0,
        'img': './assets/Guardians of The Galaxy.png',
        'Duration': '2h 1min',
        'Genre': 'Action, Adventure, Comedy',
        'ReleasedDate': '1 August 2014',
        'TrailerLink':'https://www.youtube.com/embed/d96cjJhvlMA?si=aOcMG9sd4GmRcqc1'
      },
      {
        'Title': 'Avengers: Age of Ultron',
        'Description': 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it´s up to Earth´s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
        'Rating': 7.3,
        'img': './assets/Avengers.png',
        'Duration': '2h 21min',
        'Genre': 'Action, Adventure, Sci-Fi',
        'ReleasedDate': '1 May 2015',
        'TrailerLink': 'https://www.youtube.com/embed/tmeOjFno6Do?si=Bolyry_tHP9I82e4',
      },
      {
        'Title': 'The Bad Guys: A Very Bad Holiday',
        'Description': 'In order to carry out his annual super Christmas heist, Lobo and his band of animal thieves will have to get the city back into the holiday spirit... and fast!.',
        'Rating': 6.8,
        'img': './assets/the-bad-guys-a-very-bad-holiday.jpg',
        'Duration': '2h 10min',
        'Genre': 'Animation, Adventure, Comedy',
        'ReleasedDate': '18 October 2022',
        'TrailerLink': 'https://www.youtube.com/embed/TsDznqvHVPE?si=SbUSiVc0_pIdd8iR',
      },
      {
        'Title': 'The Shepherd',
        'Description': 'On Christmas Eve, a fighter pilot returning home gets lost mid-flight over water and needs a miracle to land safely.',
        'Rating': 7.9,
        'img': './assets/the-shepherd.jpg',
        'Duration': '39min',
        'Genre': 'Drama',
        'ReleasedDate': '1 October 2023',
        'TrailerLink': 'https://www.youtube.com/embed/o3-5U1I-wRk?si=5OKpUrawAcEvdmmy',
      },
      {
        'Title': 'The Collective',
        'Description': 'A group of righteous assassins called The Collective target a highly sophisticated human trafficking ring backed by a network of untouchable billionaires. With their backs against the wall, The Collective has no choice but to put their most important mission in the hands of rookie assassin Sam Alexander.',
        'Rating': 9.8,
        'img': './assets/the-collective.jpg',
        'Duration': '1h 45min',
        'Genre': 'Drama, Action',
        'ReleasedDate': '19 July 2023',
        'TrailerLink': 'https://www.youtube.com/embed/5UbiOLp-FsA?si=Sj8fFmykG-8XDGjb',
      },
      {
        'Title': 'Family Switch',
        'Description': 'Shortly before Christmas, chaos shakes a family: by a strange cosmic conjunction, the parents exchange their bodies with those of their teenage children.',
        'Rating': 5.8,
        'img': './assets/family-switch.jpg',
        'Duration': '1h 45min',
        'Genre': 'Adventure, Comedy',
        'ReleasedDate': '2 July 2023',
        'TrailerLink': 'https://www.youtube.com/embed/SWh4c9EVqGM?si=unuRQi49ISzhE-0U',
      },
      {
        'Title': 'The velveteen rabbit',
        'Description': 'Seven-year-old William receives a new toy for Christmas, meets a friend who will last a lifetime, and enters a magical world.',
        'Rating': 7.9,
        'img': './assets/the-velveteen-rabbit.jpg',
        'Duration': '1h 30min',
        'Genre': 'Adventure, Comedy, Animation',
        'ReleasedDate': '22 November 2023',
        'TrailerLink': 'https://www.youtube.com/embed/49R6Ri6oV3E?si=kahPlu0bb695nuVo',
      },
      {
        'Title': 'Sacrifice',
        'Description': 'Isaac and his pregnant wife visit a remote Norwegian village to claim an unexpected inheritance. The couple find themselves trapped in a nightmare when they encounter a sinister sect that worships a sea-dwelling deity.',
        'Rating': 8.2,
        'img': './assets/sacrifice.jpg',
        'Duration': '2h 00min',
        'Genre': 'Crime, Drama',
        'ReleasedDate': '18 April 2021',
        'TrailerLink': 'https://www.youtube.com/embed/igUyQPawlps?si=hM11cIBrmi_E4y_8',
      },
      {
        'Title': 'The Marvels',
        'Description': 'When her duties send her into a wormhole linked to a Kree revolutionary, the powers of Carol Danvers, Captain Marvel, intertwine with those of Kamala Khan, also known as Ms. Marvel and Carol´s niece, now an astronaut. S.A.B.E.R., Monica Rambeau. Together, they must save the universe as The Marvels.',
        'Rating': 9.1,
        'img': './assets/the-marvels.jpg',
        'Duration': '1h 39min',
        'Genre': 'Action, Adventure, Sci-Fi',
        'ReleasedDate': '1 June 2023',
        'TrailerLink': 'https://www.youtube.com/embed/wS_qbDztgVY?si=q-A6opSZ6TSD94fj',
      }
    ];
    
    localStorage.setItem('movies', JSON.stringify(this.movies));
    this.filterMovies = this.movies;

  }

  restartFilter():void {
    this.filterMovies = this.movies;
  }

  filterByGender(gender:string) :void{
    const movieFilter: Movie[] = [];
    this.movies.forEach(movie => {
      if(movie.Genre.includes(gender)) movieFilter.push(movie);
    })
    this.filterMovies = movieFilter;
  }

  sortByTtle() :void{
    const orderMovies = this.filterMovies.sort((a,b) => a.Title.localeCompare(b.Title));
    this.filterMovies = orderMovies;
  }
  
  sortByRating() :void{
    const orderMovies = this.filterMovies.slice().sort((a, b) => b.Rating - a.Rating );
    this.filterMovies = orderMovies;
  }
  
  sortByReleasedDate() :void{
    const orderMovies = this.filterMovies.slice().sort((a, b) => this.converToDate(b.ReleasedDate) - this.converToDate(a.ReleasedDate));
    this.filterMovies = orderMovies;
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