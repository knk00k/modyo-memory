export interface AnimalResponse {
    entries: Entry[];
    meta:    AnimalResponseMeta;
}

export interface Entry {
    meta:   EntryMeta;
    fields: Fields;
}

export interface Fields {
    image: Image;
}

export interface Image {
    url:          string;
    tags:         any[];
    uuid:         string;
    title:        string;
    alt_text:     null;
    description:  null;
    content_type: ContentType;
}

export enum ContentType {
    ImageJPEG = "image/jpeg",
}

export interface EntryMeta {
    name:              string;
    slug:              string;
    tags:              any[];
    type:              Type;
    uuid:              string;
    space:             Space;
    author:            Author;
    locale:            Locale;
    excerpt:           string;
    private:           boolean;
    targets:           any[];
    category:          null;
    created_at:        Date;
    updated_at:        Date;
    published_at:      Date;
    unpublish_at:      null;
    version_type:      VersionType;
    category_name:     null;
    category_slug:     null;
    available_locales: Locale[];
}

export interface Author {
}

export enum Locale {
    Es = "es",
}

export enum Space {
    Animals = "animals",
}

export enum Type {
    Game = "game",
}

export enum VersionType {
    Current = "current",
}

export interface AnimalResponseMeta {
    total_entries: number;
    per_page:      number;
    current_page:  number;
    total_pages:   number;
}

