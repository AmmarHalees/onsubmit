# Contributing to `onsubmit`


## Code contributions

Here is a quick guide to doing code contributions to the library.

1. Fork and clone the repo to your local machine `git clone https://github.com/AmmarHalees/onsubmit.git`
<br>


2. Create a new branch from `main` with a meaningful name for a new feature or an issue you want to work on: `git checkout -b your-meaningful-branch-name`

<br>

3. Use the recommended node version: 

    ```shellscript
    nvm use
    ```

4. Install packages by running:

   ```shellscript
   pnpm install
   ```

5. Run the tests to ensure everything is working correctly as you're making changes.

   ```shellscript
   pnpm run dev
   ```

6. Try to write some unit tests to cover as much of your code as possible.

<br>

7. Ensure your code lints without errors.

   ```shellscript
   pnpm lint
   ```

8. Ensure the build and tests pass before commiting your changes

   ```shellscript
   pnpm run ci
   ```


9. Ensure exports are documented.

10. Push your branch: `git push -u origin your-meaningful-branch-name`

11. Submit a pull request to the upstream onsubmit repository.

12. Choose a descriptive title and describe your changes briefly.


## Documentation

In case you want to change the `README.md`, please instead modify the `docs/Template.md` file, as the README is generated from it upon committing.

## License

By contributing your code to the onsubmit GitHub repository, you agree to license your contribution under the MIT license.

### Contributors


<img src="https://opencollective.com/onsubmit/contributors.svg?width=950" />