interface AddReservation {
  projectionId: number;
  seatsNumber: number[];
}

interface Prjection {
  userId: number;
  userName: string;
  movieName: string;
  showingTime: string;
  seats: number[];
}

interface Reservation {
  movieName: string;
  seats: number[];
  showingTime: string;
  userId: number;
  userName: string;
  id: number;
}
