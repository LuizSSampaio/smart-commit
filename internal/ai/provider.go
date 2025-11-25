package ai

import "context"

type Provider interface {
	Generate(ctx context.Context, prompt string, model string) (string, error)
}
