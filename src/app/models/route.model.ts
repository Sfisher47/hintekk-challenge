export interface RouteResource {
    attributes:    RouteAttributes;
    id:            string;
    type:          string;
}

export interface RouteAttributes {
    color:                  string;
    description:            string;
    direction_destinations: string[];
    direction_names:        string[];
    fare_class:             string;
    long_name:              string;
    short_name:             string;
    sort_order:             number;
    text_color:             string;
    type:                   number;
}