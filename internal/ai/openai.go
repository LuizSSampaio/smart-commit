package ai

import (
	"context"
	"errors"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

type OpenAIAdapter struct {
	client openai.Client
}

func NewOpenAIAdapter(apiKey string) *OpenAIAdapter {
	return &OpenAIAdapter{
		client: openai.NewClient(option.WithAPIKey(apiKey)),
	}
}

func (adapter *OpenAIAdapter) Generate(ctx context.Context, prompt string, model string) (string, error) {
	resp, err := adapter.client.Chat.Completions.New(ctx, openai.ChatCompletionNewParams{
		Messages: []openai.ChatCompletionMessageParamUnion{
			openai.UserMessage(prompt),
		},
		Model: model,
	})
	if err != nil {
		return "", err
	}

	if len(resp.Choices) == 0 {
		return "", errors.New("no choices received")
	}
	return resp.Choices[0].Message.Content, nil
}
