import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticlePopupComponent } from './article-dialog.component';
import { ArticleDeletePopupComponent } from './article-delete-dialog.component';
import {FlashcardDetailComponent} from "../flashcard/flashcard-detail.component";

export const articleRoute: Routes = [
    {
        path: 'article',
        component: ArticleComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'article/:id',
        component: ArticleDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'flashcard/:id',
        component: FlashcardDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const articlePopupRoute: Routes = [
    {
        path: 'article-new',
        component: ArticlePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'article/:id/edit',
        component: ArticlePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'article/:id/delete',
        component: ArticleDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Polizeiakademie'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
