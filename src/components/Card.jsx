import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://media.tenor.com/pOQdnYcg078AAAAC/bocchi-the-rock-hitori-gotoh.gif" alt="bocchi the rock shiverring" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hitori Gotoh</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bocchi the Rock</p>
    </div>
</div>

  );
}