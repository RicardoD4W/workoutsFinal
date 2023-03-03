export interface Workout {
    res:     string;
    workout: WorkoutElement[];
}

export interface WorkoutElement {
    _id:               string;
    id:                number;
    nombre:            string;
    descripcion:       string;
    equipamiento:      string;
    consejos:          string;
    premiun:           boolean;
    grupo_muscular:    string;
    video_url:         string;
    imagen_url:        string;
    "grupo muscular"?: string;
    video_URL?:        string;
    imagen_URL?:       string;
}
