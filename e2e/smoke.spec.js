import { expect, test } from '@playwright/test';

test.describe('Parcours principaux', () => {
  test('la page d’accueil se charge et navigue vers les expertises', async ({ page }) => {
    await page.goto('.');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('potentiel humain');

    await page.getByRole('link', { name: 'Expertises' }).first().click();
    await expect(page).toHaveURL(/\/expertises$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('le formulaire de contact affiche des erreurs de validation', async ({ page }) => {
    await page.goto('contact');
    await page.getByRole('button', { name: /Envoyer mon message/i }).click();
    await expect(page.getByText(/Merci d’indiquer votre nom/i)).toBeVisible();
    await expect(page.getByText(/Merci de choisir un sujet/i)).toBeVisible();
  });

  test('le pré-rendu SSG expose le bon titre par route', async ({ page }) => {
    await page.goto('methodologie');
    await expect(page).toHaveTitle(/Méthodologie/);
  });

  test('une URL inconnue affiche la page 404', async ({ page }) => {
    await page.goto('cette-page-nexiste-pas');
    await expect(page.getByText('404')).toBeVisible();
  });
});
