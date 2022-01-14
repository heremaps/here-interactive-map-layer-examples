# Contributing Guidelines

The team behind the [HERE Interactive Map Layer Examples](https://github.com/heremaps/here-interactive-map-layer-examples) gratefully accepts contributions via
[pull requests](https://help.github.com/articles/about-pull-requests/) filed against the
[GitHub project](https://github.com/heremaps/here-interactive-map-layer-examples/pulls).


## Signing each Commit

As part of filing a pull request we ask you to sign off the
[Developer Certificate of Origin](https://developercertificate.org/) (DCO) in each commit.
Any Pull Request with commits that are not signed off will be reject by the
[DCO check](https://probot.github.io/apps/dco/).

A DCO is lightweight way for a contributor to confirm that you wrote or otherwise have the right
to submit code or documentation to a project. Simply add `Signed-off-by` as shown in the example below
to indicate that you agree with the DCO.

An example signed commit message:

```
    README.md: Fix minor spelling mistake

    Signed-off-by: John Doe <john.doe@example.com>
```

Git has the `-s` flag that can sign a commit for you, see example below:

`$ git commit -s -m 'README.md: Fix minor spelling mistake'`

## Example Guidelines 
If you would like to contribute an example, please follow the guidelines below.
- in `README.md`, add the project's title, source code link (link to the correct directory in this repository), live map link (link to the directory's github.io published website), and description.
- Add to your `index.html` has [Facebook Open Graph](https://developers.facebook.com/docs/sharing/webmasters/) and [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html) tags to enable previews for social sharing. See for example [the following link](https://github.com/heremaps/here-interactive-map-layer-examples/blob/main/examples/clustering/index.html#L24-L33).

