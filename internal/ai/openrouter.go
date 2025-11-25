package ai

import (
	"context"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

type OpenRouterAdapter struct {
	client OpenAIAdapter
}

func NewOpenRouterAdapter(apiKey string) *OpenRouterAdapter {
	return &OpenRouterAdapter{
		client: OpenAIAdapter{
			client: openai.NewClient(option.WithBaseURL("https://openrouter.ai/api/v1"), option.WithAPIKey(apiKey)),
		},
	}
}

func (adapter OpenRouterAdapter) Generate(ctx context.Context, prompt string, model string) (string, error) {
	return adapter.client.Generate(ctx, prompt, model)
}
