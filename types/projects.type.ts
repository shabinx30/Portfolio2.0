import React from 'react';

export interface IProject {
    name: string;
    imageDark?: string;
    imageLight?: string;
    image?: string;
    git: string;
    live: string;
    description: string | React.ReactNode;
    techs: string[]
}