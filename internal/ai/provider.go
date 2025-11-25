package ai

type Provider interface {
	Generate(prompt string, model string) (string, error)
}
